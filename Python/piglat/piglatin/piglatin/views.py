from django.http import HttpResponse
from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def translate(request):
    original = request.GET['originaltext'].lower()

    translation = ''
    for word in original.split():
            if word[0] in ["a", "e", "i", "o", "u"]:
                translation += word
                translation += "yay "
            else:
                if word[1] in ["a", "e", "i", "o", "u"]:
                    translation += word[1:]
                    translation += word[0]
                    translation += "ay "
                else:
                    translation += word[2:]
                    translation += word[:2]
                    translation += "ay "
    return render(request, 'translate.html', {"original":original, "translation":translation})
