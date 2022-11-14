import mpmath as mp
import sympy as sp
from mpmath import sin, cos, tan, cot, sec, csc, asin, acos, atan, acot, asec, acsc, sinh, cosh, tanh, coth, sech, csch, asinh, acosh, atanh, acoth, asech, acsch, pi, e, ln, log10, log, sqrt, fac, hyperfac, superfac, power, mpf, exp, gamma, beta, besselj, legendre, lambertw, hankel1, hankel2, ber, bei, ker, kei
from sympy import diff, integrate, Integral, oo, limit, laplace_transform, inverse_laplace_transform, fourier_series
from statistics import mean, median, mode, stdev, variance, covariance


def clean_basic(inp: str) -> str:
    new: str = inp.replace("×", "*").replace("√(", "sqrt(").replace("pow(", "power(").replace("^", "**").replace("X", "*").replace("÷", "/")
    return new


def clean_trigo(inp: str) -> str:
    new: str = inp.replace("cosec", "csc").replace("acosec", "acsc").replace("cosech", "csch").replace("acosech", "acsch")
    return new


def clean_const(inp: str) -> str:
    new: str = inp.replace("π", "pi").replace("φ", "mp.mp.phi").replace("ζ(3)", "mp.mp.apery").replace("const_khinchin", "mp.mp.khinchin").replace("const_A", "mp.mp.glaisher").replace("M_1", "mp.mp.mertens").replace("C_2", "mp.mp.twinprime")  # Replace mathematical constants
    
    new: str = new.replace("const_G", "6.6743 * 10**-11").replace("ℎ", "6.62607015 * 10**-34").replace("m_e", "9.1093837 * 10**-31").replace("m_p", "1.67262192 * 10**-27").replace("m_n", "1.67492749804 * 10**-27").replace("const_c", "3 * 10**8").replace("ħ", "1.0545718176461565 * 10**-34").replace("K_b", "1.380649 * 10**-23").replace("N_A", "6.02214076 * 10**23").replace("ε_0", "8.8541878128 * 10**-12").replace("q_e", "1.602176634 * 10**-19").replace("R∞", "10973731.568160").replace("const_F", "9.64853321233100184 * 10**4").replace("const_R", "8.31446261815324")  # Replace physical constants
    return new


def clean_calc(inp: str) -> str:
    new: str = inp.replace("∫(", "integrate(").replace("lim(", "limit(").replace("Γ(", "gamma(").replace("β(", "beta(")
    return new


def clean_stats(inp: str) -> str:
    new: str = inp.replace("cov(", "covariance(")
    return new



def clean_advanced(inp: str) -> str:
    new: str = inp.replace("bessel(", "besselj(")
    return new


def match_brackets(inp: str) -> str:
    round_open = inp.count("(")
    round_close = inp.count(")")
    square_open = inp.count("[")
    square_close = inp.count("]")
    return inp + "]" * (square_open - square_close) + ")" * (round_open - round_close)


def eval_exp(inp: str, accuracy: int) -> str:
    mp.mp.dps = accuracy
    mp.mp.pretty = True
    x, y, z, t, s = sp.symbols('x y z t s')
    a = sp.symbols('a')
    new: str = clean_basic(inp)
    new: str = clean_trigo(new)
    new: str = clean_const(new)
    new: str = clean_calc(new)
    new: str = clean_stats(new)
    new: str = clean_advanced(new)

    times = new.count("L(")
    for i in range(times):
        if "L(" in new:
            l_index = new.index("L")
            end_index = 0
            func = ""
            count = 0
            for i in range(l_index + 2, len(new)):
                if new[i] == "(":
                    count += 1
                elif new[i] == ")":
                    count -= 1
                if count < 0:
                    end_index = i
                    break
                else:
                    func += new[i]

            res = f"laplace_transform({match_brackets(func)}, t, s, noconds=True"
            new = new[:l_index] + res + new[end_index:]

    target = "L_inv("
    times = new.count(target)
    for i in range(times):
        if target in new:

            l_index = new.index(target) + 4
            end_index = 0
            func = ""
            count = 0
            for i in range(l_index + 2, len(new)):
                if new[i] == "(":
                    count += 1
                elif new[i] == ")":
                    count -= 1
                if count < 0:
                    end_index = i
                    break
                else:
                    func += new[i]


            res = f"inverse_laplace_transform({match_brackets(func)}, t, s, noconds=True)"
            new = new[:l_index - 4] + res + new[end_index + 1:]

    new: str = match_brackets(new)
    final = eval(new)
    return str(final).replace("**", "^")
