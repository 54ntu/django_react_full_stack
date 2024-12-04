from django.urls import path,include
from .views import CreateUserView,NoteListCreate,DeleteNote
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView


urlpatterns = [
    path("register/",CreateUserView.as_view(), name="register"),
    path("token/",TokenObtainPairView.as_view(),name="get_token"),
    path("refreshToken/",TokenRefreshView.as_view(),name="get_refresh"),
    path("api-auth/",include("rest_framework.urls")),


    #this two urls are for creating,listing and deleting of the notes created by the logged in user
    path("notes/",NoteListCreate.as_view(),name="note-list"),
    path("notes/delete/<int:id>/",DeleteNote.as_view(),name="delete-note")

]
