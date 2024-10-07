import email
from django.core.mail import send_mail
from django.conf import settings
from mysite.settings import EMAIL_HOST_USER

def send_mail_client():
    subject = "Order Placed Email Check"
    message = " Hello Sir, Your Order has been placed! "
    from_email = EMAIL_HOST_USER
    recipent_list = ['amanvivekanand@gmail.com']
    send_mail(subject, message, from_email, recipent_list)