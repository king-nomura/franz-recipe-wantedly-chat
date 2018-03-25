module.exports = (Franz) => {
  function getMessages() {
    let $targetBody = $('#root ws-navigation ws-navigation-main .body');
    let direct = $targetBody.find('ws-channel-item.unread-mention').length;
    let indirect = $targetBody.find('ws-channel-item.unread').length;
    Franz.setBadge(direct, indirect);
  }
  
  Franz.loop(getMessages);
  
  Franz.onNotify(notification => {
    if (typeof notification.title !== 'string') {
      notification.title = ((notification.title.props || {}).content || [])[0] || 'Wantedly Chat';
    }
    return notification;
  });
}