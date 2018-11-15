import firebase from './firebase';

const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});
const collection = db.collection('users');

class User {
  id = localStorage.getItem('userId');
  name = localStorage.getItem('userName') || 'Unknown';

  create() {
    if (this.id) {
      return this.id;
    }

    return collection
      .add({
        name: 'Anon'
      })
      .then(user => {
        this.id = user.id;
        localStorage.setItem('userId', user.id);
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
        localStorage.setItem('userName', name);
      });
  }
}

export default new User();
