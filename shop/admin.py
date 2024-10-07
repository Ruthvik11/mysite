from django.contrib import admin
from .models import products, reviews, brands, offerProducts,latestProducts,profile,order,Contact
# Register your models here.
admin.site.register(products)
admin.site.register(reviews)
admin.site.register(brands)
admin.site.register(offerProducts)
admin.site.register(latestProducts)
admin.site.register(profile)
admin.site.register(order)
admin.site.register(Contact)