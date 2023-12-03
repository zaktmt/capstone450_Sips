#send messages to server

import django
import os
import sys


def send_message(message):
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "server.settings")
    django.setup()
    from chat.models import Message
    Message.objects.create(message=message)
    print("Message sent")
    sys.stdout.flush()

def receive_message():
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "server.settings")
    django.setup()
    from chat.models import Message
    message = Message.objects.last()
    print(message)
    sys.stdout.flush()

