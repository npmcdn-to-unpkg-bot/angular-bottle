import bottle
from bottle import route, template, static_file, run

@route('/')
def index():
    return template('template/index.html')

@route('/static/<arquivo:path>')
def static(arquivo):
    return static_file(arquivo, 'static')

if __name__ == '__main__':
    run(host='localhost', port=8001, debug=True)