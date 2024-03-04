package com.amazonclone.mongospring.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "priceCard")
public class PriceCard {
    @Id
    private String id;
    private String link;
    private String title;
    private String price;
    private String discount;

    public PriceCard(String link, String title, String price, String discount) {
        this.link = link;
        this.title = title;
        this.price = price;
        this.discount = discount;
    }

    public String getId() {
        return id;
    }

    public String getLink() {
        return link;
    }

    public String getTitle() {
        return title;
    }

    public String getPrice() {
        return price;
    }

    public String getDiscount() {
        return discount;
    }
}
