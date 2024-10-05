from django.core.mail import send_mail

def send(subject, message, recipient_list):
    send_mail(subject, message, 'harshnwarghade19@gmail.com', recipient_list, fail_silently=False)
    print('Email sent successfully')

# Now you can call the send function
send("Heelo", "Hello Harsh...", ["harsh.warghade22@spit.ac.in"])
