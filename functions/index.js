'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const CUT_OFF_TIME = 7.5 * 60 * 60 * 1000;

exports.deleteOldItems = functions.database
  .ref('/sessions')
  .onWrite(async change => {
    const ref = change.after.ref.parent;
    const now = Date.now();
    const cutoff = now - CUT_OFF_TIME;
    const oldItemsQuery = ref.orderByChild('timestamp').endAt(cutoff);
    const snapshot = await oldItemsQuery.once('value');
    
    const updates = {};
    snapshot.forEach(child => {
      updates[child.key] = null;
    });
    
    return ref.update(updates);
  });
