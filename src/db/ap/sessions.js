import firebase from '../firebase';
import user from '../users';

const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});
const collection = db.collection('sessions');

export default {
  create() {
    return collection
      .add({
        members: {},
        showPoints: false,
        timestamp: Date.now()
      })
      .then(session => {
        this.addMember(session.id);
        return session;
      });
  },

  subscribe(sessionId, callback) {
    let memberUnsubscribes = [];
    const snapshotUnsubscribe = collection.doc(sessionId).onSnapshot(doc => {
      memberUnsubscribes.forEach(memberUnsubscribe => memberUnsubscribe());
      const data = doc.data();
      const members = data.members;
      memberUnsubscribes = Object.keys(members).map(memberId =>
        user.subscribe(memberId, userDoc => {
          Object.keys(data.members).forEach(memberId => {
            if (memberId === userDoc.id) {
              data.members[memberId].name = userDoc.data().name;
            }
          });
          callback(data);
        })
      );
    });
    return function unsubscribe() {
      snapshotUnsubscribe();
      memberUnsubscribes.forEach(memberUnsubscribe => memberUnsubscribe());
    };
  },

  addMember(sessionId) {
    return collection.doc(sessionId).update({
      [`members.${user.id}`]: {
        points: null
      }
    });
  },

  removeMember(sessionId) {
    return collection.doc(sessionId).update({
      [`members.${user.id}`]: firebase.firestore.FieldValue.delete()
    });
  },

  updateShowPoints(sessionId, newValue) {
    return collection.doc(sessionId).update({ showPoints: newValue });
  },

  updateClearPoints(sessionId) {
    const docRef = collection.doc(sessionId);
    return db.runTransaction(transaction => {
      return transaction.get(docRef).then(doc => {
        const members = doc.data().members;
        Object.keys(members).forEach(memberKey => {
          const member = members[memberKey];
          member.points = null;
        });
        transaction.update(docRef, { members, showPoints: false });
      });
    });
  },

  updatePoints(sessionId, newPoints) {
    return collection.doc(sessionId).update({
      [`members.${user.id}.points`]: newPoints
    });
  }
};
