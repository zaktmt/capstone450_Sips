# turn website into dark mode

class DarkMode:
    def __init__(self, user):
        self.user = user
        self.theme = user.theme
        self.theme_path = user.theme_path

    def dark_mode(self, theme):
        self.user.theme = theme
        self.user.theme_path = theme.theme_path
        self.user.save()
        return True

    def dark_avatar(self, avatar):
        self.user.avatar = avatar
        self.user.avatar_path = avatar.avatar_path
        self.user.save()
        return True

    def dark_background(self, background):
        self.user.background = background
        self.user.background_path = background.background_path
        self.user.save()
        return True

# turn website into light mode

class LightMode:
    def __init__(self, user):
        self.user = user
        self.theme = user.theme
        self.theme_path = user.theme_path

    def light_mode(self, theme):
        self.user.theme = theme
        self.user.theme_path = theme.theme_path
        self.user.save()
        return True

    def light_avatar(self, avatar):
        self.user.avatar = avatar
        self.user.avatar_path = avatar.avatar_path
        self.user.save()
        return True

    def light_background(self, background):
        self.user.background = background
        self.user.background_path = background.background_path
        self.user.save()
        return True
