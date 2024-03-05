package com.amazonclone.data.mongospring.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "dailyDeal")
public class DailyDeal {
    @Id
    private String id;
    private Integer no;
    private String link;
    private String discount;
    private String time;
    private String title;

    public DailyDeal(Integer no, String link, String discount, String time, String title) {
        this.no = no;
        this.link = link;
        this.discount = discount;
        this.time = time;
        this.title = title;
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

    public String getDiscount() {
        return discount;
    }

    public String getTime() {
        return time;
    }

    public String getTitle() {
        return title;
    }
}
