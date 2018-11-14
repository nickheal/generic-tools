import firebase from '../firebase';
import user from '../users';

const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});
const collection = db.collection('topics');

export default {
//   create() {
//     return collection
//       .add({
//         members: {},
//         showPoints: false
//       })
//       .then(session => {
//         this.addMember(session.id);
//         return session;
//       });
//   },

  subscribe(callback) {
    return collection.onSnapshot(callback);
  }
};
