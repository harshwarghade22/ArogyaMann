from django.shortcuts import render
from .models import Doctor
from rest_framework.response import Response
from .serializers import DoctorSerializer
from rest_framework.views import APIView
from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.renderers import JSONRenderer



# Create your views here.

class DoctorListView(viewsets.ModelViewSet):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['level','specialization']  # Specify the integer field for filtering
    # renderer_classes = [JSONRenderer]  # Avoids the template issue
    


    
        



