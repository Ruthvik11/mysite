from django.urls import path
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    path("product/", views.allProducts,name="product"),
    path("product/<int:id>/", views.detail_Product, name="detail_product"),
    path("cart/", views.cart, name="cart"),
    path("register/", views.Register, name="register"),
    path('login/',  views.user_login, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('account/', views.account, name='account'),
    path('checkout/', views.checkout, name='checkout'),
    path('contact/', views.contact, name='contact'),
    path('client/', views.Client, name='client'),
    path('complaint/', views.Complaint, name='complaint'),
    path('order/', views.Order, name='order'),
    path('user_tab/', views.User_table, name='user_tab'),
    # path('sendingmail/', views.sending_mail, name='sendingmail'),
    
    
    path('ResetView/', auth_views.PasswordResetView.as_view(template_name='resetview.html'), name='ResetView'),
    path('password_reset_done/', auth_views.PasswordResetDoneView.as_view(template_name='resetdone.html'), name='password_reset_done'),
    path('password_reset_confirm/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(template_name='resetconfirm.html'), name='password_reset_confirm'),
    path('password_reset_complete/', auth_views.PasswordResetCompleteView.as_view(template_name='resetcomplete.html'), name='password_reset_complete'),
    
    
    
]