# -*- coding: utf-8 -*-


def calculate_mid_arithmetic(list):
    """Calcula a média aritmética dos valores contidos em uma lista."""
    soma = sum(list)
    return soma / len(list)


print(calculate_mid_arithmetic([8, 9, 10]))
