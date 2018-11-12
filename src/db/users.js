import firebase from './firebase';

const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});
const collection = db.collection('users');

class User {
  name = 'Anon';

  create() {
    const localUserId = localStorage.getItem('apUserId');
    if (localUserId) {
      this.id = localUserId;
      return localUserId;
    }

    return collection
      .add({
        name: 'Anon'
      })
      .then(user => {
        this.id = user.id;
        localStorage.setItem('apUserId', user.id);
      });
  }

  subscribe(userId, callback) {
    return collection.doc(userId).onSnapshot(doc => callback(doc));
  }

  updateName(name) {
    collection
      .doc(this.id)
      .update({ name })
      .then(() => {
        this.name = name;
      });
  }
}

export default new User();
