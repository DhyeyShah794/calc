from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
import mpmath
from mpmath import mpf
from .units.evaluate import eval_exp, match_brackets


def home(request):

    result = ""
    try:
        exp = request.POST.get("display")
        accuracy = request.POST.get("accuracy")
        if accuracy != "":
            accuracy = int(accuracy)
        else:
            accuracy = 5  # Default accuracy
        if request.method == "POST":
            result = eval_exp(exp, accuracy)
    except:
        result = ""
    if exp != None:
        exp = match_brackets(exp) + " ="
    elif exp == None:
        exp = ""
    context = {
        'exp': exp,
        'result': result,
        'accuracy': accuracy
    }
    return render(request, 'calculator/main.html', context)


def basic(request):
    result = ""
    try:
        if request.method == "POST":
            # get the expression from the form using name of the input field
            exp = request.POST.get("display")
            result = basic_res(exp)
    except:
        result = ""
    context = {'result': result}
    return render(request, 'calculator/basic.html', context)


def user_guide(request):
    context = {}
    return render(request, 'calculator/user_guide.html', context)