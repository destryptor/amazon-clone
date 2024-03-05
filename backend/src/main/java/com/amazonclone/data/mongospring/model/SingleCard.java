package com.amazonclone.data.mongospring.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "singleCard")
public class SingleCard {
    @Id
    private String id;
    private Integer no;
    private String title;
    private String link;
    private String endline;

    public SingleCard(Integer no, String title, String link, String endline) {
        this.no = no;
        this.title = title;
        this.link = link;
        this.endline = endline;
    }

    public Integer getNo() {
        return no;
    }

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getLink() {
        return link;
    }

    public String getEndline() {
        return endline;
    }
}