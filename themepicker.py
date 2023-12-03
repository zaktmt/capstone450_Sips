#options for themes to pick on website


class ThemePicker:
    def __init__(self, user):
        self.user = user
        self.theme = user.theme
        self.theme_path = user.theme_path

    def pick_theme(self, theme):
        self.user.theme = theme
        self.user.theme_path = theme.theme_path
        self.user.save()
        return True
    
    def pick_avatar(self, avatar):
        self.user.avatar = avatar
        self.user.avatar_path = avatar.avatar_path
        self.user.save()
        return True
    
    def pick_background(self, background):
        self.user.background = background
        self.user.background_path = background.background_path
        self.user.save()
        return True
    