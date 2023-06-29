# -*- coding: utf-8 -*-


def return_higher_name(names):
    """função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres."""
    name_higher = ""
    for name in names:
        if len(name) > len(name_higher):
            name_higher = name
    return name_higher


print(return_higher_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))
