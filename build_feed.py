#create feed from feed id and user id from database

def create_feed(feed_id, user_id):
    # get user
    user = Users.query.filter_by(userid=user_id).first()
    # get feed
    feed = Feeds.query.filter_by(feedID=feed_id).first()
    # create feed
    new_feed = Feeds(feedID=feed_id, userid=user_id, username=user.username, theme=feed.theme, theme_path=feed.theme_path, avatar=feed.avatar, avatar_path=feed.avatar_path, background=feed.background, background_path=feed.background_path, message=feed.message, message_path=feed.message_path, date=feed.date)
    # add feed to database
    db.session.add(new_feed)
    db.session.commit()
    return True

