from django.urls import include, path
from . import views

urlpatterns = [
    path(r'students/', views.student_list, name='student_list'),
    path(r'students/create/', views.student_create, name='student_create'),
    path(r'students/detail/<int:pk>/', views.student_detail, name='student_detail'),
    path(r'students/update/<int:pk>/', views.student_update, name='student_update'),
    path(r'students/delete/<int:pk>/', views.student_delete, name='student_delete'),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]