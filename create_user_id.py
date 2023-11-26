def create_user_id():
    # get last user id
    last_user = Users.query.order_by(Users.userid.desc()).first()
    # if there are no users, start at 1000000001
    if last_user is None:
        return 1000000001
    else:
        return last_user.id + 1


create_user_id()
