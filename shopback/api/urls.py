from django.urls import path

# Level 2 — FBV
# from api.views.fbv import products_list, product_detail

# Level 3 — CBV
# from api.views.cbv import ProductListAPIView, ProductDetailAPIView

# Level 4 — Mixins
# from api.views.mixins import ProductListAPIView, ProductDetailAPIView

# Level 5 — Generics
from api.views.generics import (
    ProductListAPIView,
    ProductDetailAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView,
)

urlpatterns = [
    # Products
    # Level 2:
    # path('products/', products_list),
    # path('products/<int:product_id>/', product_detail),

    # Level 3 / 4 / 5:
    path('products/', ProductListAPIView.as_view(), name='products-list'),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view(), name='product-detail'),

    # Categories (Level 5 only)
    path('categories/', CategoryListAPIView.as_view(), name='categories-list'),
    path('categories/<int:category_id>/', CategoryDetailAPIView.as_view(), name='category-detail'),
    path('categories/<int:category_id>/products/', CategoryProductsAPIView.as_view(), name='category-products'),
]