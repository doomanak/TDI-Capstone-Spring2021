import numpy as np
from flask import Flask, request, jsonify, render_template
import pickle
import random

app = Flask(__name__)
model = pickle.load(open('model.pkl', 'rb'))

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict',methods=['POST'])
def predict():
    '''
    For rendering results on HTML GUI
    '''
    Airport_list=['AUS','BWI','CLT','MDW','ORD','CLE','DFW','DAL','DEN','DTW','FLL','BOS','MKE','IAH','ATL','HNL',
    'IND','JFK','SNA','MCI','LGA','STL','LAX','MSY','SJU','LAS','OAK','MIA','MSP','BNA','EWR','SJC','MCO','PHL',
    'PHX','PIT','CMH','PDX','RDU','DCA','SMF','SLC','SAT','SAN','SFO','SEA','RSW','TPA','IAD','HOU']
    Airln_list=['FL','AS','AA','DL','9E','MQ','EV','F9','HA','B6','YV','OO','WN','NK','US','UA','VX']
    b=[ii for ii in request.form.values()] ###DOOMAN
    idx_Org=Airport_list.index(b[0])
    idx_des=Airport_list.index(b[1])
    airln_idx=Airln_list.index(b[2])
    dep_month=int(b[3].split("-")[1])
    dep_day=int(b[3].split("-")[2])
    arv_month=int(b[4].split("-")[1])
    arv_day=int(b[4].split("-")[2])
    dep_hr=int(b[5])
    arv_hr=int(b[6])
    lists_asd=[idx_Org,idx_des,airln_idx,dep_month,dep_day,arv_month,arv_day,dep_hr,arv_hr]
    delay_time=int(abs(idx_Org-idx_des)/3+airln_idx/3+dep_month/3+abs(dep_day-arv_day)/2+abs(dep_hr-arv_hr))
    #a=b[0:3] ###DOOMAN
    a=[1,2,3]
    int_features = [int(x) for x in a] ###DOOMAN
    int_features = int_features 
    final_features = [np.array(int_features)]
    prediction = model.predict(final_features)
    output = round(prediction[0], 2)
    #delay_time=random.randint(0,9)
    return render_template('index.html', prediction_text='The outputs are {}'.format(lists_asd), prediction_text2='The estimated delay time is: {} minutes'.format(delay_time))


if __name__ == "__main__":
    app.run(debug=True)
