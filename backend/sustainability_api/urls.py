from django.urls import path
from .views import ActionListCreateView, SingleActionView

urlpatterns = [
    path('actions/', ActionListCreateView.as_view(), name='list-create-actions'),
    path('actions/<int:id>/', SingleActionView.as_view(), name='action-detail'),
]

