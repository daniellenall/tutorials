from django.contrib import admin
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
import posts.views
import contact.views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('posts/', posts.views.home),
    path('posts/<int:post_id>/', posts.views.post_details),
    path('contact/', contact.views.form, name='contact')
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
