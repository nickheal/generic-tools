export default {
  date(value) {
    return new Date(value).toLocaleDateString('en-UK', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    });
  }
};
