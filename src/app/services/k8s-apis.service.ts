import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl ='/k8s/apis'

@Injectable({
  providedIn: 'root'
})
export class K8sApisService {

  constructor(private http: HttpClient) { }

  getCrds(): Observable<any> {
    return this.http.get(`${baseUrl}/apiextensions.k8s.io/v1/customresourcedefinitions`);
  }

  getNetworkAttachs(): Observable<any> {
    return this.http.get(`${baseUrl}/k8s.cni.cncf.io/v1/network-attachment-definitions`);
  }

}