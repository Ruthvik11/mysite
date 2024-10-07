from django.db import models
from django.contrib.auth.models import User

# Create your models here.
# class Profile(models.Model):
#    user = models.OneToOneField(User, on_delete=models.CASCADE)
#    def _str_(self):
#       return self.user.username

class products(models.Model):
    product_name = models.CharField(max_length=500)
    price = models.IntegerField()
    category = models.CharField(max_length=100)
    product_details = models.TextField()
    image = models.ImageField(upload_to='products')
    
    def __str__(self):
        return self.product_name
 
 
class reviews(models.Model):
    review = models.TextField()
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='reviews')
    
    def __str__(self):
        return self.name
    
    
class brands(models.Model):
     image = models.ImageField(upload_to='brands')
     
     def __str__(self):
        return self.image.name
     
     
class offerProducts(models.Model):
     product_name = models.CharField(max_length=500)
     price = models.IntegerField()
     category = models.CharField(max_length=100)
     product_details = models.TextField()
     image = models.ImageField(upload_to='products')
     
     def __str__(self):
        return self.product_name
    
class latestProducts(models.Model):
     product_name = models.CharField(max_length=500)
     price = models.IntegerField()
     category = models.CharField(max_length=100)
     product_details = models.TextField()
     image = models.ImageField(upload_to='products')
     
     def __str__(self):
        return self.product_name
    

class profile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    image = models.ImageField(upload_to="profile_pictures")
    
    def __str__(self):
        return self.user.username
    
    
    
class order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    order_id = models.AutoField(primary_key=True)
    item_json = models.CharField(max_length=5000)
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    address = models.CharField(max_length=800)
    city = models.CharField(max_length=200)
    state = models.CharField(max_length=200)
    zip_code = models.CharField(max_length=200)
    phone = models.CharField(max_length=200)
    
    
    
class Contact(models.Model):
    name =  models.CharField(max_length=200)
    email =  models.CharField(max_length=200)
    subject =  models.CharField(max_length=500)
    message =  models.CharField(max_length=10000)
    
    def __str__(self):
         return self.name