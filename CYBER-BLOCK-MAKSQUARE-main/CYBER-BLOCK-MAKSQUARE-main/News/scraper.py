import requests
from bs4 import BeautifulSoup

url = "https://thehackernews.com/"

response = requests.get(url)

if response.status_code == 200:
    soup = BeautifulSoup(response.content, 'html.parser')

    link_elements = soup.find_all('h2', class_='home-title')

    for link_element in link_elements:
        link_tag = link_element.find('a')
        if link_tag:
            link = link_tag.get('href')
            print(link)
else:
    print("Failed to retrieve webpage. Status code:", response.status_code)
