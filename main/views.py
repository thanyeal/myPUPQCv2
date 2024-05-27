from django.shortcuts import render, redirect
from django.http import JsonResponse



# Create your views here.
def index(request):
    return render(request, 'pages/iskonect_index.html')

def base(request):
    return render(request, 'pages/myPUPQC.html')