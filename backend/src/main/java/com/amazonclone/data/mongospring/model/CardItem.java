package com.amazonclone.data.mongospring.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Document(collection = "cardItem")
public class CardItem {
    @Id
    private String id;
    private Integer no;
    private String title;
    private List<Item> items;
    private String endline;

    public CardItem(Integer no, String title, List<Item> items, String endline) {
        this.no = no;
        this.title = title;
        this.items = items;
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

    public List<Item> getItems() {
        return items;
    }

    public String getEndline() {
        return endline;
    }
}