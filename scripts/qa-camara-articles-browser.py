#!/usr/bin/env python3
"""Smoke browser de artigos publicados: espera o conteúdo real e salva capturas."""
import os
from pathlib import Path

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait

ARTICLES = [
    ("17", "art-51c7e2f904a68db3", "Teste de interpretação: dois silêncios com consequências diferentes"),
    ("18", "art-68b5cf209e4d731a", "Parecer de comissão não equivale a decisão conclusiva"),
    ("19", "art-c8e43a75d9061bf2", "Três formas de participação parlamentar que parecem iguais"),
    ("20", "art-6bc728a14d0e49f3", "Uma autorização não é um cheque em branco"),
    ("21", "art-7e91b362a40c58d2", "Exceção de calendário efetivamente aplicada em 2026"),
    ("22", "art-a3f905cb76e1428d", "Competência, instrumento e efeito: uma sequência de três perguntas"),
]

Path("screenshots").mkdir(exist_ok=True)
options = webdriver.ChromeOptions()
options.add_argument("--headless=new")
options.add_argument("--no-sandbox")
options.add_argument("--disable-dev-shm-usage")
options.add_argument("--disable-gpu")
options.add_argument("--force-device-scale-factor=1")
options.add_argument("--window-size=1440,900")
driver = webdriver.Chrome(options=options)
driver.set_page_load_timeout(40)
wait = WebDriverWait(driver, 40, poll_frequency=0.5)

try:
    for number, article_id, marker in ARTICLES:
        url = f"https://leorruas.github.io/concursos/#/artigo/{article_id}?concurso=camara-2026"
        print(f"Verificando artigo {number}: {url}", flush=True)
        driver.set_window_size(1440, 900)
        driver.get(url)
        driver.execute_script("localStorage.setItem('tema-concursos','light')")
        driver.refresh()
        wait.until(lambda d: marker in d.find_element(By.ID, "artigo-corpo").text)
        title = driver.find_element(By.ID, "artigo-titulo").text
        assert title, f"Artigo {number}: título ausente"
        assert "não foi possível carregar este artigo" not in driver.page_source.lower()
        driver.execute_script("window.scrollTo(0,0)")
        assert driver.save_screenshot(f"screenshots/{number}-desktop-light.png")
        print(f"Artigo {number}: DOM carregado, título: {title}", flush=True)

        driver.set_window_size(390, 844)
        driver.execute_script("localStorage.setItem('tema-concursos','dark')")
        driver.refresh()
        wait.until(lambda d: marker in d.find_element(By.ID, "artigo-corpo").text)
        driver.execute_script("window.scrollTo(0,0)")
        assert driver.save_screenshot(f"screenshots/{number}-mobile-dark.png")
        overflow = driver.execute_script(
            "return Math.max(document.body.scrollWidth,document.documentElement.scrollWidth)-window.innerWidth"
        )
        print(f"Artigo {number}: mobile dark validado; overflow horizontal={overflow}px", flush=True)

    print("Seis artigos abertos em Chrome com conteúdo renderizado em desktop e mobile.", flush=True)
finally:
    driver.quit()
