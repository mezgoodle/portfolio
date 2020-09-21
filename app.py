import requests
from flask import Flask, render_template

app = Flask(__name__)
repo_url = 'https://api.github.com/users/mezgoodle/repos?sort=pushed'


@app.route('/')
def index():
    repos = requests.get(repo_url).json()[:9]
    return render_template('index.html', repos=repos)


if __name__ == '__main__':
    app.run(debug=True)
