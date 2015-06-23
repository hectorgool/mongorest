from django.contrib import admin
from django.conf.urls import url, include
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets
from BlogApp import views
admin.autodiscover()


urlpatterns = [
    # Examples:
    # url(r'^$', 'mongorest.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),


    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
	#url (r'^$', 'santo.views.index.page'),
	#url (r'^index$', 'santo.views.index.page'),    
    url(r'^admin/', include(admin.site.urls)),
    url(r'^users/$', views.UserList.as_view()),
    url(r'^users/(?P<id>[\w]{24})/$', views.UserDetails.as_view()),
    url(r'^blogs/$', views.BlogList.as_view()),
    url(r'^blogs/(?P<id>[\w]{24})/$', views.BlogDetails.as_view()),
    url(r'^posts/$', views.PostList.as_view()),
    url(r'^posts/(?P<id>[\w]{24})/$', views.PostDetails.as_view()),
    url(r'^comments/$', views.CommentList.as_view()),
    url(r'^comments/(?P<id>[\w]{24})/$', views.CommentDetails.as_view()),
]
