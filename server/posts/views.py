# from django.shortcuts import render
# from .models import Post
# from rest_framework import viewsets
# from .serializers import PostSerializer
# from rest_framework.permissions import IsAuthenticated

# # Create your views here.
# class PostViewSet(viewsets.ModelViewSet):
#     # permission_classes = [IsAuthenticated]
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer


from django.shortcuts import render
from .models import Post
from rest_framework import viewsets
from .serializers import PostSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import action

# Create your views here.
class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    # def get_permissions(self):
    #     if self.action == 'list':
    #         permission_classes = [AllowAny]
    #     elif self.action == 'create':
    #         permission_classes = [AllowAny]
    #     else:
    #         permission_classes = [AllowAny]  # Default permission
    #     return [permission() for permission in permission_classes]
