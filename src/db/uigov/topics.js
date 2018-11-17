import firebase from '../firebase';
import user from '../users';

const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});
const collection = db.collection('topics');

export default {
  create(subject) {
    return collection.add({
      subject,
      raisedBy: user.name,
      date: Date.now()
    });
  },

  update(topicId, subject) {
    return collection.doc(topicId).update({ subject });
  },

  delete(topicId) {
    return collection.doc(topicId).delete();
  },

  subscribe(callback) {
    return collection.orderBy('date', 'desc').onSnapshot(callback);
  }
};
