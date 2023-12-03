# marketplace

# purchase themes avatars with points





class Marketplace:
    # redeem points from Users table

    def __init__(self, user):
        self.user = user
        self.points = user.points
        self.avatar = user.avatar
        self.theme = user.theme
        self.avatar_path = user.avatar_path
        self.theme_path = user.theme_path

    def purchase_avatar(self, avatar):
        # check if user has enough points
        if self.points >= avatar.price:
            # subtract points from user
            self.points -= avatar.price
            self.user.points = self.points
            self.user.save()
            # save avatar to user
            self.user.avatar = avatar
            self.user.avatar_path = avatar.avatar_path
            self.user.save()
            return True
        else:
            return False

    def purchase_theme(self, theme):
        # check if user has enough points
        if self.points >= theme.price:
            # subtract points from user
            self.points -= theme.price
            self.user.points = self.points
            self.user.save()
            # save theme to user
            self.user.theme = theme
            self.user.theme_path = theme.theme_path
            self.user.save()
            return True
        else:
            return False


# create transaction id after purchase, starts with 4

# trasactionid starts with a 4 and is 10 digits long total
def create_transaction_id():
    transactionid = '4'
    for i in range(9):
        transactionid += str(random.randint(0, 9))
    return transactionid



create_transaction_id()


