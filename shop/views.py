from django.shortcuts import render,get_object_or_404,redirect
from django.contrib import messages
from  shop.models import products, reviews,brands,order,Contact,profile
from django.core.paginator import Paginator
from .forms import Registration,LoginForm
from django.contrib.auth import authenticate, login, logout 
from django.contrib.auth.models import User
from .utils import send_mail_client
from django.core.mail import send_mail
from django.urls import reverse
from django.contrib.auth.decorators import login_required
import json


def index(request):
    offer_products = products.objects.filter(category='Mens Wear')[:4]
    latest_products = products.objects.filter(category='Kids Wear', price__lt=1000)[:4]
    all_reviews = reviews.objects.all()
    all_brands = brands.objects.all()
    all_products = products.objects.all()
    
    Item_name = request.GET.get('item_name')
    if Item_name != '' and Item_name is not None:
        all_products = all_products.filter(product_name__icontains = Item_name)
    context = {
       'products_object' : offer_products,
       'latest_objects'  : latest_products,
       'reviews_objects' : all_reviews,
       'brands_onjects'  : all_brands,
       'all_products_objects' : all_products,
      }
    return render(request,'index.html',context)


def allProducts(request):
   all_products = products.objects.all()
    # this code is for search functionality
   Item_name = request.GET.get('item_name')
   if Item_name and Item_name.strip():
        all_products = all_products.filter(product_name__icontains=Item_name.strip())
#    if Item_name != '' and Item_name is not None:
#         all_products = all_products.filter(product_name__icontains = Item_name)
   
#    below code is for pagination
   paginator = Paginator(all_products,8)
   page = request.GET.get('page')
   products_all = paginator.get_page(page)
   
   context = { 
              'all_products_objects' : all_products,
              'all_products_objects' : products_all
              }
   return render(request,'product.html',context)
 
 
def detail_Product(request,id) :
    product = get_object_or_404(products, id=id)
    
    # below line is written because i want show related products of a same category of which detail page is viewed
    related_products = products.objects.filter(category=product.category).exclude(id=product.id)
    context = {
        'product': product,
        'related_products': related_products
    }
    return render(request, 'product-details.html', context)


def cart(request):
    return render(request, 'cart.html')



def Register(request):
    if request.method == 'POST':
        form = Registration(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Your account has been created successfully!')
            return redirect('home')
             
        else:
            messages.error(request, 'Please correct the errors below.')
            print(form.errors)  # Print form errors to the console for debugging
            return render(request, 'register.html', {'form': form})

    else:
        form =  Registration()
        return render(request,'register.html',{'form':form})
 
 

def user_login(request):
    if request.method == 'POST':
        form = LoginForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                messages.success(request, f'Welcome {username}!')
                return redirect('home')
            else:
                messages.error(request, 'Invalid username or password')
        else:
            messages.error(request, 'Invalid username or password')
    else:
        form = LoginForm()
    return render(request, 'login.html', {'form': form})


def logout_view(request):
    if request.method == 'POST':
        logout(request)
        messages.success(request, 'You have been logged out.')
        return redirect('home')
    else:
        return redirect('home')
    
    
@login_required   
def account(request):
    orders = order.objects.filter(user=request.user)
    
     # Parse JSON data
    for ord in orders:
        ord.item_data = json.loads(ord.item_json)
    
    profile = request.user.profile
    context ={
        'profile_object': profile,
        'order_objects' : orders,
    }
    return render(request,"profile.html",context)

def checkout(request):
    if request.method =='POST' :
        first_name = request.POST.get('first_name', '') 
        last_name = request.POST.get('last_name', '') 
        email = request.POST.get('email', '')
        phone = request.POST.get('phone', '')
        address = request.POST.get('address', '')
        city = request.POST.get('city', '')
        state = request.POST.get('state', '')
        zip_code = request.POST.get('zip_code', '')
        item_json = request.POST.get('item_json', '')
        
        orders = order(user=request.user,first_name=first_name,last_name=last_name, email=email, address=address,
                       city=city, state=state, zip_code=zip_code, phone=phone, item_json=item_json )
        orders.save()
        send_mail_client()
        return redirect('home')  

    return render(request, 'checkout.html')
        
    # return render(request,"checkout.html")

def contact(request):
    if request.method == 'POST' :
        name = request.POST.get('name', '')
        email = request.POST.get('email', '')
        subject = request.POST.get('subject', '')
        message = request.POST.get('message', '')
       
        contacts = Contact( name=name, email=email, subject=subject, message=message )
        
        contacts.save()      
    return render(request,"contact.html")


def Client(request):
    return render(request,"client.html")

def Complaint(request):
    all_complaints = Contact.objects.all()
    context = {
        "complaints": all_complaints,
    }
    return render(request,"complaint.html",context)

def Order(request):
    all_orders = order.objects.all()
    context = {
        "orders": all_orders,
    }
    return render(request,"orders.html",context)

def User_table(request):
    all_users = User.objects.all()
    context = {
        "user_objects": all_users,
    }
    return render(request,"user.html",context)



