/* global chrome */
chrome.browserAction.onClicked.addListener(() => {
  console.info('chrome.browserAction.onClicked');
  const queryValue = '{content,title}';
  const bodyObject = { query: queryValue };
  const body = JSON.stringify(bodyObject);
  console.info(body);
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  fetch('http://172.31.16.73:8000/graphql', {
    headers,
    method: 'POST',
    body,
  })
  .then(response => response.json())
  .then(json => new Notification(json.data.title, {
    body: json.data.content,
    icon: 'ic_bug_report_black_24dp.png',
  }));
});
