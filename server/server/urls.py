from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView
from rest_framework import routers
from posts.views import PostViewSet
from assesments.views import AssessmentViewSet,UserResponseViewSet
from doctors.views import DoctorListView,SendEmailView




route = routers.DefaultRouter()
route.register("listblogs", PostViewSet, basename='postview')
route.register("assessment", AssessmentViewSet, basename='assessment')
route.register("user_response", UserResponseViewSet, basename='user')
route.register("doctorsList", DoctorListView, basename='doctors')




urlpatterns = [
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('admin/', admin.site.urls),
    path('accounts/',include('acccounts.urls')),
    path('',include(route.urls)),
    path('send-email/', SendEmailView.as_view(), name='send-email'),
    
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
