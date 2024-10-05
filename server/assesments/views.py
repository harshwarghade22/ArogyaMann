from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated,AllowAny
from .models import Assessment, UserResponse
from .serializers import AssessmentSerializer, UserResponseSerializer
from django_filters.rest_framework import DjangoFilterBackend


class AssessmentViewSet(viewsets.ModelViewSet):
    queryset = Assessment.objects.all()
    serializer_class = AssessmentSerializer
    permission_classes = [AllowAny]

class UserResponseViewSet(viewsets.ModelViewSet):
    queryset = UserResponse.objects.all()
    serializer_class = UserResponseSerializer
    permission_classes = [AllowAny]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['user']
    

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)







