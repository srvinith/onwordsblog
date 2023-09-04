from flask import Flask,send_from_directory
app=Flask(__name__)

@app.route('/blog')
def home():
 return send_from_directory('../backend/build/', 'blog')
if __name__ == '__main__':
 app.run(debug=True)
