def create_feed_id():
    # get last user id
    last_user = Users.query.order_by(Users.feedID.desc()).first()
    # if there are no users, start at 2000000001
    if last_user is None:
        return 2000000001
    else:
        return last_user.id + 1


create_feed_id()

