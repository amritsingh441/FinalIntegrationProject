package com.stackroute.newz;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.stackroute.newz.zuul.config.BeanConfiguration;
import com.stackroute.newz.zuul.filter.JwtFilter;

/*
 * The @SpringBootApplication annotation is equivalent to using @Configuration, @EnableAutoConfiguration 
 * and @ComponentScan with their default attributes
 * 
 * Add @EnableZuulProxy and @EnableEurekaClient
 * 
 */
@SpringBootApplication
@EnableZuulProxy
@EnableEurekaClient
public class NewzNetflixZuulApiGatwayApplication {
	
	
	/*
	 * @Autowired private BeanConfiguration beanConfiguration;
	 */
	

	public static void main(String[] args) {
		SpringApplication.run(NewzNetflixZuulApiGatwayApplication.class, args);
	}

	
	/*
	 * Define the bean for Filter registration. Create a new FilterRegistrationBean
	 * object and use setFilter() method to set new instance of JwtFilter object.
	 * Also specifies the Url patterns for registration bean.
	 */


    @Bean
    public FilterRegistrationBean<JwtFilter> jwtFilter() {
		FilterRegistrationBean<JwtFilter> filterbean = new FilterRegistrationBean();
		filterbean.setFilter(new JwtFilter());
		filterbean.addUrlPatterns("/NewsSourceService/api/v1/*","/NewsService/api/v1/*","/UserProfileService/api/v1/userprofile/*");
		return filterbean;
    }
	
	/*
	 * @Bean public WebMvcConfigurer corsConfigurer1() { return new
	 * WebMvcConfigurer() {
	 * 
	 * @Override public void addCorsMappings(CorsRegistry registry) {
	 * registry.addMapping("/**") .allowedMethods("*")
	 * .allowedOrigins("http://localhost:3000"); } }; }
	 */

}
