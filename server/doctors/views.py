from django.shortcuts import render
from .models import Doctor
from rest_framework.response import Response
from .serializers import DoctorSerializer
from rest_framework.views import APIView
from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend
from django.core.mail import EmailMessage
from rest_framework import status
from smtplib import SMTPException

receiver_email="harshwarghade913@gmail.com"
class DoctorListView(viewsets.ModelViewSet):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['level', 'specialization']  # Specify the integer field for filtering

class SendEmailView(APIView):
    def post(self, request, *args, **kwargs):
        sender_email = request.data.get('sender_email')
        receiver_email = request.data.get('receiver_email')
        subject = request.data.get('subject')
        message = request.data.get('message')

        if not sender_email or not subject or not message:
            return Response({"error": "Missing required fields"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            email = EmailMessage(
                subject,
                message,
                'harshnwarghade19@gmail.com',  # The sender email (from EMAIL_HOST_USER)
                [receiver_email],  # Send the email to the receiver
                reply_to=[sender_email],  # Reply to the user's email
            )
            email.send(fail_silently=False)
            return Response({"message": "Email sent successfully"}, status=status.HTTP_200_OK)
        except SMTPException as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
