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
}

export default new User();
