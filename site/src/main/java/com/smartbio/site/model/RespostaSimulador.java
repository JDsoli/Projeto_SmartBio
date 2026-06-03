package com.smartbio.site.model;

public class RespostaSimulador {
    
    private String parecer;
    private String imagemDataset;
    private Double energiaGerada;

    // Getters e Setters
    public String getParecer() {
        return parecer;
    }

    public void setParecer(String parecer) {
        this.parecer = parecer;
    }

    public String getImagemDataset() {
        return imagemDataset;
    }

    public void setImagemDataset(String imagemDataset) {
        this.imagemDataset = imagemDataset;
    }

    public Double getEnergiaGerada() {
        return energiaGerada;
    }

    public void setEnergiaGerada(Double energiaGerada) {
        this.energiaGerada = energiaGerada;
    }
}