# messaging system for website

class Messages:
    def __init__(self, user):
        self.user = user
        self.theme = user.theme
        self.theme_path = user.theme_path

    def message(self, theme):
        self.user.theme = theme
        self.user.theme_path = theme.theme_path
        self.user.save()
        return True

    def avatar(self, avatar):
        self.user.avatar = avatar
        self.user.avatar_path = avatar.avatar_path
        self.user.save()
        return True

    def background(self, background):
        self.user.background = background
        self.user.background_path = background.background_path
        self.user.save()
        return True

    def message(self, message):
        self.user.message = message
        self.user.message_path = message.message_path
        self.user.save()
        return True


#create message id after message, starts with 5
def create_message_id():
    messageid = '5'
    for i in range(9):
        messageid += str(random.randint(0, 9))
        # check if message id is already in use
        if messageid in messageid:
            messageid += str(random.randint(0, 9))
    return messageid



create_message_id()
