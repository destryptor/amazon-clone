package com.amazonclone.data.mongospring.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "priceCard")
public class PriceCard {
    @Id
    private String id;
    private Integer no;
    private String link;
    private String title;
    private String price;
    private String discount;

    public PriceCard(Integer no, String link, String title, String price, String discount) {
        this.no = no;
        this.link = link;
        this.title = title;
        this.price = price;
        this.discount = discount;
    }

    public String getId() {
        return id;
    }

    public Integer getNo() {
        return no;
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
